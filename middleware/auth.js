export default function({ store, redirect }) {
  if (!store.state.user.authUser) {
    redirect("/login");
  }
}
