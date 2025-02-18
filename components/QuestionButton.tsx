export default function QuestionButton() {
    return(
          <div className="py-2 px-2 sm:py-3 sm:px-2 bg-white text-center text-black text-xs sm:text-sm font-semibold rounded-2xl">
              <a href="mailto:justin@getsumu.xyz?subject=Question about Sumu&body=I would love to join, but first...%0D%0A%0D%0A%0D%0AIf you have more than just one question, copy and paste the link to schedule a call with me: https://calendly.com/justin-getsumu" className="block">
                  Ask Us a Question
              </a>
          </div>
      );  
  }