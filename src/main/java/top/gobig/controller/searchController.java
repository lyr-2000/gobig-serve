package top.gobig.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import top.gobig.service.SearchService;
import top.gobig.util.GDao;

import java.util.Map;

@RestController
@RequestMapping({"**/search"})
public class searchController {

    @Autowired
    SearchService searchService;

    /**
     * 通过关键字查询视频信息
     * @param dao {searchKeyWord , videoNum , pageStart , pageLast}
     * @return
     */
    @RequestMapping("/searchVideo")
    public Map<String, Object> searchVideo(@RequestBody GDao dao){
        System.out.println("=============searchVideo===========");
        Map<String, Object> res = searchService.searchVideo(dao);
        return res;
    }

    /**
     * 管理员关键字搜索视频
     * @param dao {|vid |title |uid |nickName pageItemNum}
     * @return
     */
    @RequestMapping("/searchVideoByAdmin")
    public Map<Object, Object> searchVideoByAdmin(@RequestBody GDao dao){
        System.out.println("=============searchVideoByAdmin===========");
        System.out.println(dao);
        Map<Object, Object> res = searchService.searchVideoByAdmin(dao);
        return res;
    }

    /**
     * 关键字查询用户信息
     * @param dao |uid |nickName  pageStart pageItemNum
     * @return
     */
    @RequestMapping("/searchUser")
    public Map<Object, Object> searchUser(@RequestBody GDao dao){
        System.out.println("=============searchUser===========");
        Map<Object, Object> res = searchService.searchUser(dao);
        return res;
    }
}
