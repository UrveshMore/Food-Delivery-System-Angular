package com.swiggy.Doa;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiggy.Model.CartModel;

public interface CartDoa extends JpaRepository<CartModel,Integer> {

	void save(ArrayList<CartModel> c);
	
	
}