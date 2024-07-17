package com.lcf.common;

import lombok.Data;

@Data
public class CommonDto<T> {
    // 假设这是一个用于返回通用响应的DTO  
    private T content; // 响应消息

    private Boolean success = true;

    private String message;


}