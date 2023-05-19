package com.swiggy.Doa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swiggy.Model.PaymentModel;

public interface PaymentDoa extends JpaRepository<PaymentModel,Integer> {




}