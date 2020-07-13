package com.example.RestService;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Simpl {

    @Id
    @GeneratedValue
    private long id;
    private String loh;

    public simpl() {}

    public Simpl(long id, String loh) {
        this.id = id;
        this.loh = loh;
    }

    public long getId() {
        return id;
    }

    public String getLoh() {
        return loh;
    }


    public void setId(long id) {
        this.id = id;
    }

    public void setLoh(String loh) {
        this.loh = loh;
    }
}
