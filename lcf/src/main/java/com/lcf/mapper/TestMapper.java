package com.lcf.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.lcf.entity.Test;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestMapper extends BaseMapper<Test> {
    public List<Test> selectTestAll();
}
