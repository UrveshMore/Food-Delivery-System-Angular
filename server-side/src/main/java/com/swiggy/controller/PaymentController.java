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

import com.swiggy.Doa.PaymentDoa;
import com.swiggy.Model.MenuModel;
import com.swiggy.Model.PaymentModel;
import com.swiggy.exception.ResourceNotFoundException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PaymentController {
	@Autowired
	PaymentDoa pd;

	@PostMapping("paymentsave")
	PaymentModel createCart(@RequestBody PaymentModel cart ) {
		return pd.save(cart);
	}

	@GetMapping("/showpayment")
	@CrossOrigin(origins="http://localhost:4200")
	public List<PaymentModel> findAllOrderss(){
		return pd.findAll();
	}
	
	
	@DeleteMapping("/deletep/{pid}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int pid){
		PaymentModel menu = pd.findById(pid)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + pid));
		
		pd.delete(menu);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}