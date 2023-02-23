package com.dione.testingmanagebackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Releas implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long refRelease;
    private String nomRelease;
    private Date dateLivraison;
    private Date datePrevision;
    private Date dateReelle;

    @OneToMany(mappedBy = "release", cascade = CascadeType.REMOVE)
    private Set<Ticket> tickets= new HashSet<>();

//    @OneToMany(cascade=CascadeType.REMOVE, fetch=FetchType.LAZY, mappedBy="release", orphanRemoval=true)
//    @Cascade(org.hibernate.annotations.CascadeType.DELETE_ORPHAN)
//    private Set<Ticket> tickets= new HashSet<>();

//    @OneToMany(mappedBy = "release",
//            cascade = CascadeType.ALL,
//            orphanRemoval = true,
//            fetch = FetchType.LAZY )
//    private Set<Ticket> tickets = new HashSet<>();
}
