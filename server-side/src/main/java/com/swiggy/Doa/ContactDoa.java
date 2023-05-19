package com.swiggy.Doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiggy.Model.ContactModel;

public interface ContactDoa extends JpaRepository <ContactModel,Integer>{

}
