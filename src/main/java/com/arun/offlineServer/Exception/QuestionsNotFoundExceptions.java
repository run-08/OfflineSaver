package com.arun.offlineServer.Exception;


public class QuestionsNotFoundExceptions extends RuntimeException{
    public QuestionsNotFoundExceptions(String errorMessage){
        super(errorMessage);
    }
}
