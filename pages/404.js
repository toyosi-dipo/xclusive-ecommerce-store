import Link from "next/link";

function NotFound() {
  return (
    <main className="mb-36 mt-10 sm:mt-20">
      <div className="global-container">
        <p className="mb-10 flex items-center gap-3 text-sm text-black/50 sm:mb-20">
          Home <span>/</span> <span className="text-black">404 Error</span>
        </p>

        <div className="space-y-20 text-center">
          <div className="space-y-10">
            <h1 className="font-inter text-8xl font-medium">404 Not Found</h1>
            <p className="">
              This page is not found. You may go back to home page.
            </p>
          </div>

          <Link href="/" className="btn2 mx-auto">
            Back to home page
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
