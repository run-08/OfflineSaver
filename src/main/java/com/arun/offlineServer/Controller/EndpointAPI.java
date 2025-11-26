package com.arun.offlineServer.Controller;

import com.arun.offlineServer.DTO.QuestionRequestDTO;
import com.arun.offlineServer.DTO.QuestionResponseDTO;
import com.arun.offlineServer.Model.QuestionResponse;
import com.arun.offlineServer.Service.RequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/offline-saver/api")
public class EndpointAPI {

    private final RequestService requestService;
    @PostMapping("/getQuestions")
    public ResponseEntity<QuestionResponse> sendQuestions(@RequestBody @Validated QuestionRequestDTO questionRequestDTO){
       return requestService.getResponse(questionRequestDTO);
    }

    @PostMapping("/saveQuestions")
    public ResponseEntity<?> saveQuestions(@RequestBody @Validated QuestionResponseDTO questionResponseDTO){
        return requestService.saveQuestions(questionResponseDTO);
    }
}
