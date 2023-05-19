package com.swiggy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swiggy.Doa.AdminloginDao;
import com.swiggy.Model.AdminloginModel;
import com.swiggy.service.AdminloginService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AdminloginController {

	@Autowired
	AdminloginDao ad;
	
	@Autowired
	AdminloginService as;
	
	
	@PostMapping("adminlogin")
	public ResponseEntity<?> loginAdmin(@RequestBody AdminloginModel adminData){
		AdminloginModel admin = ad.findByEmail(adminData.getEmail());
		System.out.println(admin);
		if(admin.getPassword().equals(adminData.getPassword())) {
			return ResponseEntity.ok(admin);
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();	
	
	}
	
//	@PostMapping("admininsert")
//	@CrossOrigin(origins="http://localhost:4200")
//	public void saveU(@RequestBody AdminloginModel a) throws Exception{
//		String tempEmailId=a.getEmail();
//		if(tempEmailId!=null && "".equals(tempEmailId)) {
//			AdminloginModel sobj = as.fetchAdminByEmail(tempEmailId);
//			if(sobj!=null) {
//				throw new Exception("user with"+tempEmailId+"already exists");
//			}
//		}
//		as.saveAdmin(a);
//	}
	
}