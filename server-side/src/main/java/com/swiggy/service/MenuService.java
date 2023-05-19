package com.swiggy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swiggy.Doa.MenuDoa;
import com.swiggy.Model.MenuModel;

@Service
public class MenuService {
	@Autowired
	MenuDoa md;
	
	public void saveProduct(MenuModel m) {
		md.save(m);
	}
	public List<MenuModel> getAllUser(){
		return md.findAll();
	}
	public void saveMenu(MenuModel m) {
		md.save(m);	
	} 
	public MenuModel getMenuById(int mid) {
		Optional<MenuModel> pm=md.findById(mid);
		if(pm.isPresent()) {
			return pm.get();
		}
		else
		return null;
	}
}