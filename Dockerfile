FROM ubuntu:20.04

RUN apt-get update --fix-missing
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y default-jdk && apt-get install -y maven
RUN export JAVA_HOME="/usr/lib/jvm/java-17-openjdk-amd64"

RUN apt-get install -y nodejs
RUN apt-get install -y npm

COPY . /testingManageBackEnd
WORKDIR /testingManageBackEnd
RUN mvn spring-boot-maven-plugin

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", "-Dblabla", "-jar","/testingManageBackEnd/target/testingManageBackEnd-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=prod,api-docs,no-liquibase"]
