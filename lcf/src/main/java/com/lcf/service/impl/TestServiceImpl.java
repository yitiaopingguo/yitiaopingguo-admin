package com.lcf.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.lcf.entity.Test;
import com.lcf.mapper.TestMapper;
import com.lcf.service.TestService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TestServiceImpl extends ServiceImpl<TestMapper, Test> implements TestService {
    @Resource
    private TestMapper testMapper;
    @Override
    public List<Test> selectTestAll(){
        return testMapper.selectTestAll();
    }
}
