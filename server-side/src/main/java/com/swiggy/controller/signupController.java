package com.swiggy.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swiggy.Doa.signupDoa;
import com.swiggy.Model.signupModel;
import com.swiggy.service.signupService;




@RestController
@CrossOrigin(origins="http://localhost:4200")
public class signupController {
	@Autowired
	signupService gs;
	
	@PostMapping("insert")


	public void save(@RequestBody signupModel g) {gs.saveUser(g);
		
	}
	@PostMapping("view")
	public signupModel getPlayer(@RequestBody signupModel id) {
	String id1=id.getEmail();
	return gs.getPlayerById(id1);
}

	@Autowired
	private signupDoa gDOA;
	@PostMapping("login")
	@CrossOrigin(origins="http://localhost:4200")
	
	public ResponseEntity<?>loginUser(@RequestBody signupModel userData)
	{
		signupModel user=gDOA.findByEmail(userData.getEmail());
		System.out.println(user);
	if(user.getPassword().equals(userData.getPassword()))
		return ResponseEntity.ok(user);
	return (ResponseEntity<?>) ResponseEntity.internalServerError();
		
	}
	@GetMapping("/showUser")
	@CrossOrigin(origins="http://localhost:4200")
	public List<signupModel> findAllOrderss(){
	return gDOA.findAll();
	}
}
