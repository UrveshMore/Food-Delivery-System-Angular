package com.swiggy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swiggy.Doa.CartDoa;
import com.swiggy.Doa.signupDoa;
import com.swiggy.Model.CartModel;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CartController {

	@Autowired
	CartDoa cd;
	
	@Autowired 
	signupDoa sd;
	
	@GetMapping()
	List<CartModel> getCart(){
		return cd.findAll();
	}
	
//	@PostMapping
//	CartModel createCart(@RequestBody CartModel cart ) {
//		return cd.save(cart);
//	}
	
	@PostMapping("cart")
	@CrossOrigin(origins="http://localhost:4200")
	public void addcart(@RequestBody CartModel c[]){
			for(int i=0;i<c.length;i++) {
				cd.save(c[i]);
			}
	}
	
	@GetMapping("/showCart")
	@CrossOrigin(origins="http://localhost:4200")
	public List<CartModel> findAllOrderss(){
	return cd.findAll();
	}

	
//	@PostMapping("cart/{cid}/sign/{email}")
//	@CrossOrigin(origins="http://localhost:4200")
//	CartModel signupcart(@PathVariable int cid, @PathVariable String email) {
//		CartModel cart = cd.findById(cid).get();
//		SignupModel sign = sd.findByEmail(email);
//		cart.saveCart(sign);
//		return cd.save(cart);
//		
//	}
}