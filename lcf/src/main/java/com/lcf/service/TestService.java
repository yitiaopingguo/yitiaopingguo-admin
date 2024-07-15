package com.lcf.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.lcf.entity.Test;

import java.util.List;

public interface TestService extends IService<Test> {
    public List<Test> selectTestAll();
}
