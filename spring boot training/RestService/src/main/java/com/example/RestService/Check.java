package com.example.RestService;

public class Check {
    private final String userid;
    private final String carNum;

    public Check(String userID, String carNum) {
        this.userid = userID;
        this.carNum = carNum;
    }

    public String getUserid() {
        return userid;
    }

    public String getCarnum() {
        return carNum;
    }
}
