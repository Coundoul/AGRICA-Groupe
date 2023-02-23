FROM openjdk:17
LABEL maintainer="javaguides.net"
ADD target/spring-boot-docker.jar spring-boot-docker.jar
ENTRYPOINT ["java","-jar","spring-boot-docker.jar"]
