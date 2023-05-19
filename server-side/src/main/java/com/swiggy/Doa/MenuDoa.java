package com.swiggy.Doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiggy.Model.MenuModel;

public interface MenuDoa extends JpaRepository<MenuModel, Integer>{

}