package com.lcf.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.lcf.entity.Category;
import com.lcf.mapper.CategoryMapper;
import com.lcf.service.CategoryService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lcf
 * @since 2024-06-20
 */
@Service
public class CategoryServiceImpl extends ServiceImpl<CategoryMapper, Category> implements CategoryService {
    @Resource
    private CategoryMapper categoryMapper;
    @Override
    public IPage pageCC(IPage<Category> page, Wrapper wrapper) {
        return categoryMapper.pageCC(page,wrapper);
    }
}
