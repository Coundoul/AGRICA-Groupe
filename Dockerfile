# syntax=docker/dockerfile:1

FROM openjdk:17

RUN mkdir -p /app-backend

WORKDIR /app-backend

COPY .mvn/ .mvn

COPY mvnw pom.xml ./

RUN ./mvnw dependency:resolve

COPY src ./src

EXPOSE 9092

CMD ["./mvnw", "spring-boot:run"]