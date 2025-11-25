package com.arun.offlineServer.Configuration;

import com.arun.offlineServer.Exception.QuestionsNotFoundExceptions;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(QuestionsNotFoundExceptions.class)
    public ResponseEntity<Map<String,String>> hadnleQuestionsNotFounded(QuestionsNotFoundExceptions qnfe){
        Map<String,String> detailedErrors = new HashMap<>();
        detailedErrors.put("Error: " ,qnfe.getMessage());
        detailedErrors.put("Occurred at:", LocalDateTime.now().toString());
        return ResponseEntity.internalServerError().body(detailedErrors);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String,String>> handleAllErrors(Exception ex){
        Map<String,String> detailedErrors = new HashMap<>();
        detailedErrors.put("Error: " ,ex.getMessage());
        detailedErrors.put("Occurred at:", LocalDateTime.now().toString());
        return ResponseEntity.internalServerError().body(detailedErrors);
    }
}
