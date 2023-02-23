FROM ubuntu:20.04

EXPOSE 9092

ADD target/spring-boot-docker.jar spring-boot-docker.jar

ENTRYPOINT ["java", "-jar","/spring-boot-docker.jar"]