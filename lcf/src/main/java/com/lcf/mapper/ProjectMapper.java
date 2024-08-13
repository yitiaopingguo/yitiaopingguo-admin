package com.lcf.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.lcf.entity.Article;
import com.lcf.entity.Project;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lcf
 * @since 2024-07-18
 */
@Mapper
public interface ProjectMapper extends BaseMapper<Project> {
    IPage pageCC(IPage<Project> page, @Param(Constants.WRAPPER) Wrapper wrapper);
}
