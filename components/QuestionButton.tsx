export default function QuestionButton() {
    return(
          <div className="py-2 px-2 sm:py-3 sm:px-2 bg-white text-center text-black text-sm sm:text-md font-semibold rounded-2xl">
              <a href="mailto:your-email@example.com?subject=Question about Sumu&body=I would love to join, but first...%0D%0A%0D%0A%0D%0A(If you have more than just one question, you can schedule a call with me here:)" className="block">
                  Ask Us a Question
              </a>
          </div>
      );  
  }