function Profile(props: { status: string }) {
    return (
        <div class="profile-container">
            <div class="profile">
              <div class="avatar-container">
                <img src="https://avatars.githubusercontent.com/u/50304249?v=4" />
                <div class="status-container">
                  <div class={"status" + " " + props.status} />
                </div>
              </div>
                <div class="links">
                    <ul>
                        <a href="#"><img src="discord.svg" /><li>hazyrain</li></a>
                        <a href="https://github.com/hazyu"><img src="github.svg" /><li>hazyu</li></a>
                        <a href="https://twitch.tv/hazorah"><img src="twitch.svg" /><li>hazorah</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile
