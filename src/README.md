# Coding challenge for SquishMedia

STARTING TIME: 7:40 pm 8/15/19

## Problem

"Create a React app with two pages displaying comments 
The first page shows a list of comment threads. Each thread shows the subject of the root comment by default but you can toggle additional information. Additional information must include the ‘commenters’ participating in the thread and indicate if you have any favorite comments in the thread. 
The second page should show one comment thread and the tree of replies, including the comment body. This view should allow you to favorite a comment. You should be able to make a new comment, replying to any existing comment, but you do not need to be able to make threads. 
Authentication and users can be fully mocked, you can write your application assuming the user is already logged in. Your initial state is as shown and may be included in your code or loaded as a JSON file.."


In Summary:

- Two pages

- First page shows threads
- Each thread is displayed with the subject of the first comment
- Additional information can be toggled
- Additional information includes commenters participating in thread and show if you favorited any comments

- Second page shows one comment thread and its replies
- This includes each comment's subject
- Can favorite a comment
- Make a new comment
- Replying to an existing comment

- Do NOT have to make new threads
- Assume user is already logged in

## Components required

### Comment component

Component that represents a typical comment

Displays the following
- name
- subject
- body

- Thought: do we want to be efficient with our component making and use this for both thread display on the first page and a typical comment?

### Thread Page component

Component that represents a typical thread

Displays the following
- Starting comment (should be a comment with no parent)
- Comments whose parent is in that thread. 

## rendering comments

We will receive props from its parent. These props will be the name, body, subject, id, and parent

## TODO

- Set up a router to distinguish the pages  DONE
- Should have two routes, one for the first page, and a dynamic route for the second. We need a dynamic route due to having multiple threads we can access.     DONE

- The JSON's file will be shared with multiple components, how should we go about this.
1.) Set up a context to do the asynchronous call once upon start up
2.) Upon going to a page, perform an asynchronous call related to it

Option 1 sounds better suited for this. DONE

- To begin with, on the Main page, display only the comments that have no parent

