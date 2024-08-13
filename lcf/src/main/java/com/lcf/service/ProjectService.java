package com.lcf.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.lcf.entity.Article;
import com.lcf.entity.Project;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author lcf
 * @since 2024-07-18
 */
public interface ProjectService extends IService<Project> {

    IPage pageCC(IPage<Project> page, Wrapper wrapper);

}
