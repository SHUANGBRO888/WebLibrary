package com.GeziPro.springbootlibrary.dao;

import com.GeziPro.springbootlibrary.entity.Message;
import com.GeziPro.springbootlibrary.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface MessageRepository extends JpaRepository<Message, Long> {
    Page<Message> findByUserEmail(@RequestParam("user_email") String userEmail,
                              Pageable pageable);

    Page<Message> findByClosed(@RequestParam("closed") boolean closed,
                               Pageable pageable);
}
