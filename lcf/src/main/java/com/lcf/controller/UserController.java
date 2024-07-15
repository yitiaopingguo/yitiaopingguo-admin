package com.lcf.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.lcf.common.QueryPageParam;
import com.lcf.common.Result;
import com.lcf.entity.User;
import com.lcf.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lcf
 * @since 2024-06-13
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {
    @Autowired UserService userService;
    @GetMapping("/list")
    public List<User> hello(){
        return userService.list();
    }
//    新增
    @PostMapping("/save")
    public Boolean save(@RequestBody User user){
        return userService.save(user);
    }
    //    更新
    @PostMapping("/update")
    public Boolean update(@RequestBody User user){
        return userService.updateById(user);
    }
    //    删除
    @GetMapping("/del")
    public Boolean del(@RequestParam String id){
        return userService.removeById(id);
    }


//    分页分页分页
@PostMapping("/listPage")
//    public List<User> listPage(@RequestBody HashMap map){
public List<User> listPage(@RequestBody QueryPageParam query){
    HashMap param = query.getParam();
    String name = (String)param.get("name");
    System.out.println("name==="+(String)param.get("name"));
    /*System.out.println("no==="+(String)param.get("no"));*/
        /*LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper();
        lambdaQueryWrapper.eq(User::getName,user.getName());

        return userService.list(lambdaQueryWrapper);*/

    Page<User> page = new Page();
    page.setCurrent(query.getPageNum());
    page.setSize(query.getPageSize());

    LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper();
    lambdaQueryWrapper.like(User::getName,name);


    IPage result = userService.page(page,lambdaQueryWrapper);

    System.out.println("total=="+result.getTotal());

    return result.getRecords();
}


//    查询（模糊，匹配）
    @PostMapping("/listP")
    public Result listP(@RequestBody User user) {
        LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(user.getName())){
            lambdaQueryWrapper.like(User::getName,user.getName());
        }
        return Result.suc(userService.list(lambdaQueryWrapper));
    }

//
    @PostMapping("/listPageC")
    public List<User> listPageC(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String name = (String)param.get("name");
        System.out.println("name==="+name);

        Page<User> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper.like(User::getName,name);

        IPage result = userService.pageCC(page,lambdaQueryWrapper);
        System.out.println("total=="+result.getTotal());

        return result.getRecords();

    }

    //

    @PostMapping("/listPageC1")
    public Result listPageC1(@RequestBody QueryPageParam query){
        HashMap param = query.getParam();
        String name = (String)param.get("name");
        String sex = (String)param.get("sex");
        String roleId = (String)param.get("roleId");

        Page<User> page = new Page();
        page.setCurrent(query.getPageNum());
        page.setSize(query.getPageSize());

        LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper();
        if(StringUtils.isNotBlank(name) && !"null".equals(name)){
            lambdaQueryWrapper.like(User::getName,name);
        }
        if(StringUtils.isNotBlank(sex)){
            lambdaQueryWrapper.eq(User::getSex,sex);
        }
        if(StringUtils.isNotBlank(roleId)){
            lambdaQueryWrapper.eq(User::getRoleId,roleId);
        }

        //IPage result = userService.pageC(page);
        IPage result = userService.pageCC(page,lambdaQueryWrapper);

        System.out.println("total=="+result.getTotal());

        return Result.suc(result.getRecords(),result.getTotal());
    }
}
