package com.arun.offlineServer.Repository;

import com.arun.offlineServer.Model.QuestionResponse;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepo extends MongoRepository<QuestionResponse,String> {
}
