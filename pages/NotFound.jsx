import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-center px-6 py-32 text-center">
      <p className="font-display text-6xl text-lime">404</p>
      <h1 className="mt-4 font-display text-3xl text-ivory">Page not found</h1>
      <p className="mt-3 max-w-sm text-mist">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <div className="mt-8">
        <Button to="/" variant="primary">
          Back to home
        </Button>
      </div>
    </section>
  );
}
