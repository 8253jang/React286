package web.mvc.config;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Collections;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig {
    //AuthenticationManager가 인자로 받을 AuthenticationConfiguraion 객체 생성자 주입
    private final AuthenticationConfiguration authenticationConfiguration;



    //AuthenticationManager Bean 등록
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        log.info("bCryptPasswordEncoder call.....");
        return new BCryptPasswordEncoder();
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        log.info("SecurityFilterChain filterChain(HttpSecurity http) call.....");

        //CORS 설정
        http
                .cors((corsCustomizer ->
                        corsCustomizer.configurationSource(new CorsConfigurationSource()
                        {
                            @Override
                            public CorsConfiguration  getCorsConfiguration(HttpServletRequest request) {
                                CorsConfiguration configuration = new
                                        CorsConfiguration();
                                configuration.setAllowedOrigins(Collections.singletonList("http://localhost:5173"));
                                configuration.setAllowedMethods(Collections.singletonList("*"));
                                configuration.setAllowCredentials(true);
                                configuration.setAllowedHeaders(Collections.singletonList("*"));
                                configuration.setMaxAge(3600L);

                                configuration.setExposedHeaders(Collections.singletonList("Authorization"));
                                return configuration;
                            }
                        })));

       /////////////////////////////////
        //csrf disable - 세션 쿠키 대신 JWT 사용
        http.csrf((auth) -> auth.disable()); //csrf공격을 방어하기 위한 토큰 주고 받는 부분을 비활성화!
        //Form 로그인 방식 disable -> React, JWT 인증 방식으로 변겨예정
        //disable 를 설정하면 시큐리티의 UsernamePasswordAuthenticationFilter비활성됨.
        http.formLogin((auth) -> auth.disable()); //기본 제공 폼 로그인 기능을 비활성

        //http basic 인증 방식 disable - JWT를 사용하기 위한 설정
        http.httpBasic((auth) -> auth.disable());// HTTP Basic 인증을 비활성화하는 설정JWT

        //경로별 인가 작업
        http.authorizeHttpRequests((auth) ->
                auth
                     //.requestMatchers("/test", "/members", "/members/**", "/boards").permitAll()
                      //.requestMatchers("/admin").hasRole("ADMIN")
                        .anyRequest().permitAll());

        //필터 추가 LoginFilter()는 인자를 받음
        // (this.authenticationManager() 메소드에 authenticationConfiguration 객체를 넣어야 함)
//addFilterAt은 UsernamePasswordAuthenticationFilter의 자리에 LoginFilter가 실행되도록 설정하는 것
       // http.addFilterAt(new LoginFilter(this.authenticationManager(authenticationConfiguration), jwtUtil), UsernamePasswordAuthenticationFilter.class);
        //JWTFilter 등록
       // http.addFilterBefore(new JWTFilter(jwtUtil), LoginFilter.class);

        return http.build();
    }
}