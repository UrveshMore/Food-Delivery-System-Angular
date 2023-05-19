package com.swiggy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swiggy.Doa.ContactDoa;
import com.swiggy.Model.ContactModel;
import com.swiggy.exception.ResourceNotFoundException;
import com.swiggy.service.ContactService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ContactController {
	@Autowired
	ContactService ms;
	@Autowired
ContactDoa fd;
	@PostMapping("review")
	@CrossOrigin(origins="http://localhost:4200")
	public void save(@RequestBody ContactModel m) {
		ms.saveReview(m);
	}
	
	@GetMapping("contact")
	@CrossOrigin(origins="http://localhost:4200")
	public List<ContactModel> getAllUser(){
		return ms.getAllUser();
	}

	@DeleteMapping("/deletefeedback/{id}")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<Map<String, Boolean>> deleteFeedback(@PathVariable int id){
		ContactModel menu = fd.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Feedback not exist with id :" + id));
		
		fd.delete(menu);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
