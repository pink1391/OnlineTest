package com.onlinetest.services.implementation;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinetest.entity.exam.Question;
import com.onlinetest.entity.exam.Quiz;
import com.onlinetest.repository.QuestionRepository;
import com.onlinetest.services.QuestionService;

@Service
public class QuestionServiceImplementation implements QuestionService {

	@Autowired
	private QuestionRepository questionRepository;

	@Override
	public Question addQuestion(Question question) {
		return this.questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		return this.questionRepository.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		return new LinkedHashSet<>(this.questionRepository.findAll());
	}

	@Override
	public Question getQuestion(Long questionId) {
		return this.questionRepository.findById(questionId).get();
	}

	@Override
	public Set<Question> getQuestionOfQuiz(Quiz quiz) {
		return this.questionRepository.findByQuiz(quiz);
	}

	@Override
	public void deleteQuestion(Long questionId) {
		Question question = new Question();
		question.setQuesId(questionId);
		this.questionRepository.delete(question);		
	}

}
