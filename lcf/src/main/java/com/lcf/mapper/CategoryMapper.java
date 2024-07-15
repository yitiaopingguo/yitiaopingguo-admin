package com.lcf.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import com.lcf.entity.Category;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lcf
 * @since 2024-06-20
 */
@Mapper
public interface CategoryMapper extends BaseMapper<Category> {
    IPage pageCC(IPage<Category> page, @Param(Constants.WRAPPER) Wrapper wrapper);
}
