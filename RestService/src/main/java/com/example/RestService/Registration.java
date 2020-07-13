package com.example.RestService;

public class Registration {
    private final String userid;
    private final String carNum;

    public Registration(String userID, String carNum) {
        this.userid = userID;
        this.carNum = carNum;

        requestApproval(userID,carNum);
    }

    public String getUserid() {
        return userid;
    }

    public String getCarnum() {
        return carNum;
    }

    public String requestApproval(String userID, String carNum){
        //CAR SAVE
        return "Succsess";

        //return "Fail";
    }
}
