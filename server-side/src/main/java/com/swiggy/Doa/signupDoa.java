package com.swiggy.Doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiggy.Model.signupModel;



public interface signupDoa extends JpaRepository <signupModel, String>{

	signupModel findByEmail(String email);

}
