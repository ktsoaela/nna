import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private workItems = [
    { 
      link: '/portfolio-detail/',
      projectId: 'project-1',  
      image: 'assets/img/placeholder.jpg', 
      name: 'project-1', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',
    },
    { 
      link: '/portfolio-detail/project-2',
      projectId: 'project-2',   
      image: 'assets/img/placeholder.jpg', 
      name: 'project-2', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',

    },
    { 
      link: '/portfolio-detail/project-3',
      projectId: 'project-3',    
      image: 'assets/img/placeholder.jpg', 
      name: 'project-3', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',
    },
    { 
      link: '/portfolio-detail/project-4',
      projectId: 'project-4',   
      image: 'assets/img/placeholder.jpg', 
      name: 'project-4', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',
    },
    { 
      link: '/portfolio-detail/project-5',
      projectId: 'project-5',   
      image: 'assets/img/placeholder.jpg', 
      name: 'project-5', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',
    },
    {    
      link: '/portfolio-detail/project-6',
      projectId: 'project-6',   
      image: 'assets/img/placeholder.jpg', 
      name: 'project-6', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',
    },
    { 
      link: '/portfolio-detail/project-7',
      projectId: 'project-7',   
      image: 'assets/img/placeholder.jpg', 
      name: 'project-7', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',
    },
    { 
      link: '/portfolio-detail/project-8',
      projectId: 'project-8',   
      image: 'assets/img/placeholder.jpg', 
      name: 'project-8', 
      type: 'WebApp', 
      technologies: ['ReactJS, JQuery, MySQL'],

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.',
    },
    { 
      link: '/portfolio-detail/project-9',
      projectId: 'project-9',   
      image: 'assets/img/placeholder.jpg', 
      name: 'project-9', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL',

      //Details
      brief: 'Praesent et nunc congue, ultrices libero eget, sagittis nulla. Duis cursus porttitor dui, eget aliquet nulla. Vestibulum vestibulum tellus eros, at tempus libero facilisis eget. Donec eget tincidunt mi. Suspendisse laoreet viverra tortor et ultrices. Proin eget nunc in dolor scelerisque semper at sed odio',
      description: ' Nullam porttitor molestie orci in porttitor. Vivamus at tincidunt dui. Pellentesque vitae justo vitae elit scelerisque volutpat. Proin viverra pretium scelerisque. Donec eget pretium velit. Proin accumsan ex id felis iaculis aliquet. In accumsan leo ut risus ullamcorper, id scelerisque ipsum commodo. Ut tincidunt purus sapien, a mattis augue dictum id. Suspendisse congue dignissim ante vel tristique.',

      demo_link : 'https://github.com/ktsoaela/',
      project_link : 'https://github.com/ktsoaela/',

      challenges_solutions : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros risus, tempus eget cursus vitae, scelerisque eu elit. Quisque vel pharetra risus. Donec auctor magna at libero cursus euismod eu et nisi. In quis vehicula mauris. Sed arcu magna, consequat in nibh nec, viverra pellentesque nibh. Pellentesque tempor nisi ac diam maximus condimentum eget eget felis. Praesent dignissim eu nulla tristique iaculis.',
      role_responsibilities : 'Donec et ultricies enim. Nunc a tellus pellentesque, cursus orci id, ultricies neque. Nulla tincidunt neque in leo fermentum consequat. Ut ut rhoncus nisl. Aliquam eu nisi venenatis, facilisis lectus ut, pharetra neque. Suspendisse tincidunt, nunc sed ornare egestas, est tortor ornare dolor, nec ornare mauris ipsum egestas magna. In dapibus porttitor ligula sit amet eleifend.',
      project_duration : 'Morbi semper enim est, sit amet placerat leo aliquam vel. Quisque a lobortis libero, in ultricies lorem. Fusce eget nunc enim. Vivamus at quam luctus, tincidunt enim id, dignissim neque. Donec sodales rhoncus nibh in commodo. Sed risus ligula, aliquet vitae posuere congue, sodales et velit. Sed tempus magna ut nunc gravida feugiat. Maecenas in est a tortor molestie hendrerit. Quisque nec luctus est. Suspendisse bibendum tellus nec ipsum elementum, auctor pretium velit auctor. In tincidunt, nisl vitae elementum malesuada, nunc metus facilisis ipsum, in convallis ex neque eget sapien. Nam et ipsum nec dolor laoreet tristique ut eget massa.',
      project_outcomes : 'Quisque dui purus, tempus vitae turpis eu, commodo porta nibh. Nullam non felis sed ex vehicula congue. Sed ac ex nec diam ullamcorper lobortis. Sed erat mauris, sagittis sit amet ligula eget, vehicula semper libero. Morbi venenatis commodo magna, non aliquam leo tincidunt sed. Aenean erat velit, cursus eget lectus nec, facilisis fringilla neque. Vestibulum eget sollicitudin urna.', 
    }
  ];

  constructor() { }

  getWorkItems() {
    return this.workItems;
  }

  getWorkItemById(projectId: string) {
    return this.workItems.find((item: any) => item.projectId === projectId);
  }
}
