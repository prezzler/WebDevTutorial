package com.springboot.blog.service.impl;

import com.springboot.blog.exception.ResourceNotFoundException;
import com.springboot.blog.model.Post;
import com.springboot.blog.payload.PostDTO;
import com.springboot.blog.repository.PostRepo;
import com.springboot.blog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    // Constructor based dependency injection
    private PostRepo postRepo;

    @Autowired
    public PostServiceImpl(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    @Override
    public PostDTO createPost(PostDTO postDTO) {

        // convert DTO to



        Post newPost = postRepo.save(mapToEntity(postDTO));

        // convert entity to DTO

        return mapToDTO(newPost);
    }

    private  PostDTO mapToDTO(Post post){
        PostDTO postDTO = new PostDTO();
        postDTO.setId(post.getId());
        postDTO.setTitle(post.getTitle());
        postDTO.setDescription(post.getDescription());
        postDTO.setContent(post.getContent());
        return postDTO;
    }

    private Post mapToEntity(PostDTO postDTO ){
        Post post = new Post();
        post.setId(postDTO.getId());
        post.setTitle(postDTO.getTitle());
        post.setDescription(postDTO.getDescription());
        post.setContent(postDTO.getContent());
        return post;
    }

    @Override
    public List<PostDTO> getAllPosts(){
        // Get a List of Posts from DB
        List<Post> postList = postRepo.findAll();

//        // convert List of Post to List of PostDTO
//        List<PostDTO> postDTOList = new ArrayList<PostDTO>();
//        for(int i = 0; i < postList.size(); i++) {
//            Post post = postList.get(i);
//            postDTOList.add(mapToDTO(post));
//        }
        List<PostDTO> postDTOList = postList.stream()
                                            .map(this::mapToDTO)
                                            .collect(Collectors.toList());
        return postDTOList;
    }

    @Override
    public PostDTO getPostById(long id) {
        Post post = postRepo.findById(id)
                            .orElseThrow(() -> new ResourceNotFoundException("Post", "id", id));
        PostDTO postDTO = mapToDTO(post);
        return postDTO;
    }

    @Override
    public PostDTO updatePost(PostDTO postDTO, long id) {
        Post post = postRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "id", id));
        post.setTitle((postDTO.getTitle()));
        post.setDescription((postDTO.getDescription()));
        post.setContent((postDTO.getContent()));

        Post updatedPost = postRepo.save(post);
        return mapToDTO(updatedPost);
    }


}
