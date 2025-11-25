package com.arun.offlineServer.Service;

import com.arun.offlineServer.DTO.QuestionRequestDTO;
import com.arun.offlineServer.DTO.QuestionResponseDTO;
import com.arun.offlineServer.Exception.QuestionsNotFoundExceptions;
import com.arun.offlineServer.Model.QuestionResponse;
import com.arun.offlineServer.Repository.QuestionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RequestService {

    private final QuestionRepo questionRepo;
    public ResponseEntity<QuestionResponse> getResponse(QuestionRequestDTO questionRequestDTO) {
       QuestionResponse questionResponse = questionRepo
               .findById(questionRequestDTO
                       .getSections())
               .orElseThrow(()-> {
                   throw new QuestionsNotFoundExceptions(questionRequestDTO.getSections()+" set Questions not founded!");
               });
       return ResponseEntity.ok(questionResponse);
    }

    public ResponseEntity<?> saveQuestions(QuestionResponseDTO questionResponseDTO){
        QuestionResponse questionResponse = QuestionResponse
                .builder()
                .sectionName(questionResponseDTO.getSectionName())
                .response(questionResponseDTO.getResponse())
                .build();
        questionResponse = questionRepo.save(questionResponse);
//        System.out.println(questionResponse);
        return ResponseEntity.ok(questionResponse);
    }
}
