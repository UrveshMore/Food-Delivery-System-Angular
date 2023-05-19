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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swiggy.Doa.MenuDoa;
import com.swiggy.Model.MenuModel;
import com.swiggy.exception.ResourceNotFoundException;
import com.swiggy.service.MenuService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MenuController {
	@Autowired
	MenuService ms;
	@Autowired
	MenuDoa md;
	@PostMapping("menu")
	@CrossOrigin(origins="http://localhost:4200")
	public void save(@RequestBody MenuModel m) {
		ms.saveProduct(m);
	}
	
	@GetMapping("view")
	public List<MenuModel> getUser(){
		return ms.getAllUser();
	}
	@PostMapping("adminmenu")
	@CrossOrigin(origins="http://localhost:4200")
	public void saveU(@RequestBody MenuModel s) throws Exception {
		ms.saveMenu(s);
	}
	@PostMapping("find")
	@CrossOrigin(origins="http://localhost:4200")
	MenuModel removeCart(@RequestBody MenuModel mid) {
		int id1 = mid.getMid(); 
		return ms.getMenuById(id1);
	}
	
	@GetMapping("search/{mid}")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<MenuModel> getEmployeeById(@PathVariable int mid) {
		MenuModel menu = md.findById(mid)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + mid));
		return ResponseEntity.ok(menu);
	}
	
	@PutMapping("/updatemenu/{mid}")
	public ResponseEntity<MenuModel> updateEmployee(@PathVariable int mid, @RequestBody MenuModel m){
		MenuModel menu = md.findById(mid)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + mid));
		
		menu.setTitle(m.getTitle());
		menu.setPrice(m.getPrice());
		
		
		MenuModel updatedmenu = md.save(menu);
		return ResponseEntity.ok(updatedmenu);
	}
	
	@DeleteMapping("/deleteproduct/{mid}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int mid){
		MenuModel menu = md.findById(mid)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + mid));
		
		md.delete(menu);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
	
	
