package com.lcf.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.lcf.entity.Article;
import com.lcf.entity.Project;
import com.lcf.mapper.ProjectMapper;
import com.lcf.service.ProjectService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lcf
 * @since 2024-07-18
 */
@Service
public class ProjectServiceImpl extends ServiceImpl<ProjectMapper, Project> implements ProjectService {

    @Resource
    private ProjectMapper projectMapper;
    @Override
    public IPage pageCC(IPage<Project> page, Wrapper wrapper) {
        return projectMapper.pageCC(page,wrapper);
    }

}
