package com.lcf.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/common")
@CrossOrigin(origins = "http://localhost:3000")
public class CommonUpload {

    @Value("${images.path}")
    private String basePath;

    @PostMapping("/upload")
    public CommonDto<String> upload(MultipartFile file){
        //原始文件名
        String originalFilename=file.getOriginalFilename();
        String suffix = originalFilename.substring(originalFilename.lastIndexOf("."));
        //使用UUID建新生成一个文件名,防止文件名重复或文件覆盖
        String fileName = UUID.randomUUID().toString()+ suffix;
        //创建一个目录
        File dir = new File(basePath);
        //判断当前目录是否存在
        if(!dir.exists()) {
            //如果当前目录不存在就直接创建
            dir.mkdirs();
        }
        try {
            //将格时文件特行司执行位置
            file.transferTo(new File(basePath+fileName));
        }catch(IOException e){
            e.printStackTrace();
        }
        CommonDto<String> commonDto=new CommonDto<>();
        commonDto.setContent(fileName);
        return commonDto;
    }

    @GetMapping("/download")
    public void download(String name, HttpServletResponse response){

        try{
            //输入流，通过输入流读取文件内容
            FileInputStream fileInputStream = new FileInputStream(new File(basePath + name));
            //输出流，通过输出流将文件返回给浏览器，在浏览器中展示图片
            ServletOutputStream outputStream = response.getOutputStream();
            response.setContentType("image/jpeg");

            int len = 0;
            byte[] bytes = new byte[1024];
            while ((len = fileInputStream.read(bytes)) != -1){
                outputStream.write(bytes,0,len);
                outputStream.flush();
            }
            //关闭资源
            outputStream.close();
            fileInputStream.close();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
