<template>
  <div>
    <v-row
      justify="center"
    >
      <v-btn
        color="indigo"
        class="ml-3"
        dark
        icon
        @click="dialog = true"
      >
        <v-icon>mdi-settings</v-icon>
      </v-btn>

        <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
        >
        <v-card tile>
            <v-toolbar
            flat
            dark
            color="indigo darken-2"
            >
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn
                dark
                text
                @click="dialog = false"
                >
                Save
                </v-btn>
            </v-toolbar-items>
            <v-menu
                bottom
                right
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    @click="() => {}"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
            </v-toolbar>
            <v-card-text>
              <v-container></v-container>
              <v-divider inset></v-divider>
              <v-subheader inset class="body-1">Auth data</v-subheader>
              <v-card flat>
                  <v-list>
                   
                  </v-list>
              </v-card>
            <!-- <v-btn
                color="indigo"
                dark
                class="ma-2"
                @click="dialog2 = !dialog2"
            >
                Open Dialog 2
            </v-btn>
            <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="ma-2"
                    v-bind="attrs"
                    v-on="on"
                >Tool Tip Activator</v-btn>
                </template>
                Tool Tip
            </v-tooltip> -->

            <v-list
                three-line
                subheader
            >
                <v-list-item>
                <v-list-item-content>
                    <v-row>
                      <v-col cols="12" md="12" sm="12">
                        <v-card max-width="80%" class="ml-5" flat>
                          <v-toolbar flat>
                            <span><v-icon color="indigo">mdi-pen</v-icon></span><v-toolbar-title class="ml-4 grey--text text--darken">Update your profile </v-toolbar-title>
                          </v-toolbar>
                          <v-divider></v-divider>
                          <v-container>
                            <v-row>
                              <v-col>
                                <v-list >
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="yellow darken-1" dark>mdi-email</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">johndeo@thecrossift.com</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update email address</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <update-email />
                                    </v-list-item-action>
                                  </v-list-item>
                                  <!--  update username -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-face</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">John_D</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update username</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <user-name />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update name -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-account</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">John Deo</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update name</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <update-name />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update gender -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-gender-male-female</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">Null</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update gender</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <gender />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update occupation -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-briefcase</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">Journalist</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update occupation</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <occupation />
                                    </v-list-item-action>
                                  </v-list-item>

                                  <!--  update password -->
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-icon class="indigo" dark>mdi-lock</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                      <v-list-item-title class="title">********</v-list-item-title>
                                      <v-list-item-subtitle class="overline">update password</v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-action>
                                      <update-pass />
                                    </v-list-item-action>
                                  </v-list-item>
                                </v-list>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-col>
                    </v-row>
                </v-list-item-content>
                </v-list-item>
                <v-list-item>
               
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
                three-line
                subheader
            >
                <v-subheader>General</v-subheader>
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Sound</v-list-item-title>
                    <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Auto-add widgets</v-list-item-title>
                    <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-card-text>

            <div style="flex: 1 1 auto;"></div>
        </v-card>
        </v-dialog>

      <v-dialog
        v-model="dialog2"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-btn
              color="primary"
              dark
              @click="dialog3 = !dialog3"
            >
              Open Dialog 3
            </v-btn>
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog2 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="dialog3"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog3 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import updateName from '../Auth/update/updateName.vue';
import updateGender from '@/components/Auth/update/updateGender.vue';
import updateUsername from '@/components/Auth/update/updateUsername.vue';
import Occupation from '@/components/Auth/update/updateOccupation.vue';
import Password from '@/components/Auth/update/updatePassword.vue';
import updateEmail from '@/components/Auth/update/updateEmail.vue';

  export default {
    components: {
      'update-name': updateName,
      'user-name': updateUsername,
      'gender': updateGender,
      'occupation': Occupation,
      'update-pass': Password,
      'update-email': updateEmail,
    },

    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me',
          },
          {
            title: 'Click Me 2',
          },
        ],
        select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
      }
    },
  }
</script>