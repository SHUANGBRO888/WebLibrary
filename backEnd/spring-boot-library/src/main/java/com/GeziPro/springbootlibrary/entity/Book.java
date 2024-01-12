package com.GeziPro.springbootlibrary.entity;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "book")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // mapping

    // id
    @Column(name = "id")
    private Long id;
    // title
    @Column(name = "title")
    private String title;
    // author
    @Column(name = "author")
    private String author;

    // description
    @Column(name = "description")
    private String description;

    // copies
    @Column(name = "copies")
    private int copies;

    // copiesAvailable
    @Column(name = "copiesAvailable")
    private int copiesAvailable;

    // category
    @Column(name = "category")
    private String category;

    // img
    @Column(name = "img")
    private String img;

}
