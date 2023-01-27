import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed libero semper, venenatis tellus a, semper mi. Fusce dapibus tortor orci, non semper tortor ullamcorper vel. Cras pretium, velit quis egestas tincidunt, lacus enim dignissim ipsum, eget pretium justo lorem vitae nibh. Vivamus condimentum at velit non ultricies. Praesent luctus nec lacus nec vehicula. Sed elementum urna neque, id ornare risus bibendum lobortis. Aenean accumsan lobortis ornare.
<br/><br/>
Phasellus orci purus, ullamcorper interdum purus vel, suscipit dictum ligula. In scelerisque, lorem non maximus eleifend, quam magna mollis arcu, in cursus sapien est lobortis quam. Donec lorem nisl, dignissim non est eget, porta molestie neque. Ut nec ligula aliquet, fringilla ligula quis, facilisis magna. Donec hendrerit viverra erat, id laoreet justo mollis id. Sed lorem dolor, lobortis a sodales sed, consectetur consequat massa. Phasellus nisi nisl, dictum at sodales at, rutrum at sapien. Quisque eros ligula, viverra id pretium ut, dictum eget ligula. Suspendisse libero sapien, lobortis sit amet mauris eu, tincidunt blandit diam. Aliquam faucibus, ante vitae malesuada congue, augue dolor varius ipsum, eget sagittis metus tortor eu lorem. Vestibulum vehicula arcu sed tellus tempus feugiat. Nunc ut faucibus ligula, a auctor orci. Nulla ullamcorper elit at felis ullamcorper, feugiat vestibulum ligula porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum gravida pretium.
<br/><br/>
Donec iaculis a purus id sodales. Mauris cursus sollicitudin arcu, ac posuere purus euismod et. Ut egestas lacus viverra, rutrum lectus id, dapibus purus. Etiam leo leo, sagittis eget enim sed, aliquam aliquet nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin arcu orci, sodales id sapien sit amet, hendrerit elementum mi. Phasellus ac erat accumsan, laoreet massa eu, egestas leo. Fusce neque nisl, dapibus ac turpis vitae, feugiat hendrerit enim. Duis mi nulla, consectetur eget egestas quis, tincidunt in nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse placerat dapibus libero vitae dictum. Integer faucibus feugiat fermentum. Aliquam non tortor commodo, commodo turpis eget, facilisis ex.
<br/><br/>
Curabitur dapibus, lacus ut scelerisque auctor, orci dui pulvinar felis, eget egestas neque nulla sit amet magna. Quisque dolor dui, luctus ut ipsum id, ornare luctus nisl. Vivamus ut gravida lectus. Pellentesque fringilla augue ligula, finibus ultrices massa laoreet sit amet. Curabitur eget ipsum lorem. Phasellus dignissim malesuada velit at molestie. Suspendisse in blandit ipsum. Cras non congue turpis. Nam accumsan, erat sed varius tempor, felis felis faucibus augue, a venenatis nulla justo lobortis lectus. Donec efficitur nisl id magna dictum, id dictum lectus rhoncus. Quisque eget dui ut ex consequat lobortis. Curabitur et elit vitae mi egestas hendrerit eu ac leo.
<br/><br/>
Integer eu iaculis diam. Aenean varius nulla ut ipsum condimentum, cursus malesuada odio fringilla. Nam feugiat porttitor dui sed pharetra. Vestibulum nunc turpis, euismod id orci sit amet, volutpat auctor nisl. Phasellus accumsan lorem in elit dapibus ultrices. Nunc sit amet mauris dui. Quisque nec laoreet mauris.
<br/><br/>
Proin facilisis massa in magna eleifend finibus. Aenean eu egestas ligula. In bibendum dolor vitae eros blandit viverra. Aenean aliquam feugiat quam sed interdum. Fusce blandit rutrum libero volutpat pharetra. Nam et magna auctor, tristique ex at, fermentum lectus. Vestibulum bibendum congue tortor sed egestas. Proin rhoncus hendrerit velit efficitur commodo.
<br/><br/>
Suspendisse massa mauris, volutpat eu dui vitae, condimentum faucibus elit. Mauris hendrerit mauris vel enim malesuada malesuada. Praesent faucibus lectus sit amet ligula pharetra, vitae aliquam urna commodo. Maecenas dignissim tincidunt finibus. Morbi non tristique dolor, in sodales ante. Integer vitae nibh eget orci auctor molestie vel sed lorem. Morbi venenatis sed nisl et efficitur. In hac habitasse platea dictumst.
<br/><br/>
Pellentesque ac convallis mi, a placerat ligula. Suspendisse potenti. Fusce in erat vel ipsum interdum lacinia. Duis convallis metus at egestas ultrices. Donec viverra felis a ipsum ultrices aliquet. Nunc mattis elementum placerat. Nullam vitae sapien tellus. Aliquam rhoncus lectus et ex aliquet lobortis. Aliquam bibendum consequat leo non dictum. Mauris a urna sed odio volutpat placerat. Ut luctus, massa in feugiat placerat, nibh lorem tincidunt sapien, sit amet ultricies ligula metus eu tortor. Phasellus sit amet neque et velit dignissim ultrices. Nam malesuada ligula neque, ac interdum lacus egestas in.
<br/><br/>
Duis vitae eleifend leo. Proin a massa aliquam, elementum metus vel, elementum purus. Vivamus fermentum faucibus volutpat. Morbi elit est, bibendum sit amet cursus non, accumsan vel augue. Nunc at molestie sapien. Phasellus congue id justo eget cursus. Donec sit amet luctus neque. Curabitur id venenatis metus, sit amet porta odio. In cursus porta sodales. Aenean facilisis ullamcorper semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pulvinar neque id odio euismod tristique. Suspendisse condimentum orci ut convallis gravida. Sed sit amet ligula placerat, porta risus a, imperdiet enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sed purus at massa dapibus mollis non vel orci.
<br/><br/>
Proin accumsan eros id arcu sodales luctus vel ut est. Curabitur volutpat urna augue, ac lobortis neque gravida a. Aenean ultricies augue in arcu sagittis vehicula. Integer a tellus dolor. Donec urna quam, porta non tincidunt nec, iaculis nec sem. Quisque sed nibh nec sapien molestie luctus. Curabitur imperdiet sapien ligula, eget consectetur libero porttitor nec. Suspendisse ut finibus lorem. Cras ut hendrerit purus. Mauris hendrerit libero pretium pretium dictum. Aliquam sed odio sodales ex aliquet tempus. Vestibulum nisi felis, volutpat a sodales in, blandit ut dui.
<br/><br/>
Etiam lacinia lorem ac elit porta suscipit eget ac dolor. Quisque varius varius nibh ut tempus. Aenean placerat lorem risus, et tristique nibh mollis id. Suspendisse potenti. Phasellus est diam, hendrerit sed tellus in, hendrerit scelerisque urna. Nullam nunc risus, cursus pulvinar congue id, vulputate ut justo. Fusce sed sem fermentum, condimentum neque quis, consectetur enim.
<br/><br/>
Curabitur lobortis sodales ligula lobortis volutpat. Sed suscipit lacinia scelerisque. Donec mauris leo, ultricies ac tellus quis, pharetra maximus massa. Cras non orci ut tellus pharetra blandit at vel urna. Ut varius dolor quis mauris finibus, non auctor metus tincidunt. Maecenas urna neque, elementum id nunc ut, tincidunt hendrerit turpis. Sed mollis ante nibh, a interdum neque porttitor et. Mauris pellentesque volutpat ligula, eu sollicitudin massa pharetra ac. Donec cursus eleifend vulputate. Integer ut sagittis mi. Nam ac metus mattis, fringilla lorem vel, mattis lacus. Maecenas ultricies vel sapien vitae porttitor. Nullam ultrices, nisi dignissim accumsan mollis, justo est finibus augue, nec feugiat ipsum enim ut nibh. Curabitur sodales dolor nulla, porta auctor dolor auctor quis. Maecenas porttitor mi a erat pharetra scelerisque.
<br/><br/>
Curabitur enim velit, tristique non scelerisque nec, tempus sed magna. Aenean convallis urna sit amet sem hendrerit mollis. Etiam et ornare lacus. Ut vitae quam molestie nisl scelerisque molestie. Nullam et purus luctus, fringilla libero eget, tempus nulla. Phasellus consectetur condimentum imperdiet. Donec viverra placerat urna, sed tristique ipsum sollicitudin eu. Cras luctus a erat ac egestas. Nullam eu massa molestie, porta nibh id, tincidunt lectus. Nulla tempor ac leo non varius.
<br/><br/>
Nullam eu nibh et lorem bibendum pretium ut id nisl. Proin in magna turpis. Mauris lacinia volutpat diam, eu lobortis lacus sodales et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed volutpat ac justo elementum sollicitudin. Aenean eu tempor ipsum. Mauris sem dui, placerat nec sodales eget, porta vitae tellus. Aliquam ut luctus massa. Nulla vel placerat dui, ac rhoncus tortor. Mauris laoreet neque urna, facilisis varius augue ullamcorper vel. Ut non lorem risus. Ut sed hendrerit mi. Pellentesque molestie risus a lectus gravida, quis sodales quam vehicula. Sed tincidunt facilisis neque, vestibulum malesuada elit commodo quis.
<br/><br/>
Ut eleifend, diam ut dictum elementum, turpis libero molestie diam, nec volutpat velit sapien nec nibh. In fringilla, nulla quis aliquet tincidunt, erat mauris gravida nulla, in tristique neque nibh quis libero. Fusce urna arcu, venenatis quis lorem eget, iaculis commodo neque. Sed maximus iaculis odio, at finibus erat commodo varius. Vivamus id fringilla elit. Suspendisse tincidunt, velit sed bibendum tempor, nibh urna fermentum massa, et feugiat nibh nunc quis neque. Sed mauris magna, faucibus a luctus at, consectetur in lectus. Phasellus scelerisque sapien eros, eget eleifend dui luctus eget. Fusce consequat magna sed condimentum tempor. Mauris quis mattis felis. Ut maximus finibus dolor, quis bibendum est ultricies vitae. Suspendisse risus mi, pretium tincidunt convallis ut, dapibus malesuada sem. Vivamus ut eleifend arcu. Sed ultricies, sapien a pretium facilisis, tortor elit sollicitudin sapien, quis laoreet dui justo vitae purus. Phasellus rhoncus ante eu ipsum dignissim mollis.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar')

body.append(progressBar);

/**
 * Función que haga el calculo del "width" del progress bar
 */

const calcularPorcScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//Streams
const scroll$ = fromEvent(document, 'scroll');

//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => calcularPorcScroll(event)),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
