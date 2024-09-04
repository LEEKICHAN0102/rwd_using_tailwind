import CharacterImage from "../CharacterImage"
import Skeleton from "../Skeleton"
import TextBox from "../TextBox"


// Cygnus page를 위한 Container ... 더 좋은 방법을 찾는게 좋을듯; DB 쓰기 싫은데 ㅠ
export default function CygnusContainer() {
  return(
    <>
      <Skeleton 
        vSrc="/knights_of_cygnus/mihile.mp4"
        styles="w-1/3 h-1/3"
      />
      <TextBox 
        title="여제를 섬기는 빛의 기사"
        content={`
          미하일은 시그너스 여제를 섬기는 기사단장 입니다.\n
          자신의 운명을 알지 못했던 그에게 시그너스 여제가 찾아와 빛의 기사로서의 운명을 일깨워주게 되고,
          이후 미하일은 시그너스 기사단에 합류합니다.\n
          빛의 힘으로 적을 응징하고, 소울 실드를 사용해 적의 공격을 완벽하게 막은 후 강력한 반격을 날릴 수 있습니다.
        `}
        textColor="text-yellow-500"
      />
      <CharacterImage 
        src="/knights_of_cygnus/soul_master.webp"
      />
      <TextBox 
        title="천체의 힘을 사용하는 태양과 달의 기사"
        content={`
          소울마스터는 정령 소울의 힘을 받아들여 태양, 달, 천체의 힘을 다루는 전사입니다.\n
          소울마스터는 태양의 검술과 달의 검술을 반복하며 우주의 힘의 매개체인 코스믹 오브를 획득할 수 있습니다.\n
          코스믹 오브를 사용하면 더 강력한 우주의 힘을 발휘하는 코스믹 스킬을 사용할 수 있습니다.
        `}
        textColor="text-yellow-400"
      />
      <CharacterImage 
        src="/knights_of_cygnus/wind_breaker.webp"
      />
      <TextBox
        title="바람과 함께 자유롭게 메이플 월드를 누비는 바람의 궁수"
        content={`
          윈드브레이커는 정령 스톰의 힘을 받아들여 바람의 힘을 사용하는 궁수입니다.\n
          산뜻한 바람부터 거센 바람까지 다양한 바람으로 적을 공격합니다.\n
          특히 윈드브레이커가 공격할 때마다 변덕스러운 바람의 정령이 나타나\n
          적을 추가로 공격하는 트라이플링 윔은 윈드브레이커의 속사 공격과 함께 강력한 위력을 자랑합니다.\n
        `}
        textColor="text-green-400"
      />
      <CharacterImage 
        src="/knights_of_cygnus/flame_wizard.webp"
      />
      <TextBox
        title="순수한 화염의 힘을 사용하는 불꽃의 마법사"
        content={`
          플레임위자드는 정령 플레임의 힘을 받아들여 불꽃의 힘을 사용하는 마법사입니다.\n
          순수한 화염 구체를 발사하는 오비탈 플레임으로 적을 매우 빠르게 연속 공격할 수 있습니다.\n
          플레임위자드는 소환 중인 불꽃의 화신의 종류에 따라\n
          다양한 전투에서 각 분야에 특화된 스킬을 사용할 수 있습니다.
        `}
        textColor="text-red-500"
      />
      <CharacterImage 
        src="/knights_of_cygnus/night_walker.webp"
      />
      <TextBox 
        title="어둠의 힘을 담은 표창을 다루는 그림자의 대가"
        content={`
          나이트워커는 정령 다크니스의 힘을 받아들여 그림자와 어둠의 힘을 사용하는 도적입니다.\n
          표창에 어둠의 힘을 실어 그림자로 빚어낸 배트를 다수 소환하고,\n
          자신의 행동을 따라하는 종복을 여러 개 소환하여 끊임없는 공격을 선보입니다.\n
          나이트워커는 배트와 종복들을 이용해 쉴 새 없이 적을 공격할 수 있습니다.
        `}
        textColor="text-purple-500"
      />
      <CharacterImage 
        src="/knights_of_cygnus/striker.webp"
      />
      <TextBox 
        title="바다와 번개의 힘을 사용하는 연계 공격의 대가"
        content={`
          스트라이커는 정령 라이트닝의 힘을 받아들여 바다와 번개의 힘을 사용하는 해적입니다.\n
          다양한 연계 공격을 여러 상황에서 다재다능하게 사용할 수 있으며 적을 빠르고 끊임없이 타격합니다.\n
          연계 공격의 대가인 스트라이커는 스킬을 연계할 때마다 더욱 강한 위력을 발휘할 수 있습니다.
        `}
        textColor="text-blue-400"
      />
    </>
  )
}